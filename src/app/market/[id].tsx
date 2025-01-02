import { useCameraPermissions, CameraView } from "expo-camera"
import { Alert, Modal, View, ScrollView } from "react-native"
import { Coupon, Cover, Details } from "@/components/market"
import { router, useLocalSearchParams } from "expo-router"
import { IconQrcode } from "@tabler/icons-react-native"
import { useEffect, useRef, useState } from "react"
import { Button, Loading } from "@/components"
import { Market as MarketType } from "@/types"
import { api } from "@/services/api"

export const Market = () => {
    const params = useLocalSearchParams<{ id: string }>()
    const [market, setMarket] = useState<MarketType>()
    const [isVisibleCameraModal, setIsVisibleCameraModal] = useState(false)
    const [_, requestPermission] = useCameraPermissions()
    const [coupon, setCoupon] = useState()
    const [couponIsFetching, setCouponIsFetching] = useState(false)
    const qrLock = useRef(false)

    const fetchMarket = async () => {
        try {
            const { data } = await api.get(`/markets/${params.id}`)
            setMarket(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possível carregar os dados",[
                { text: "OK", onPress: () => router.back() }
            ])
        }
    }

    const handleOpenCamera = async () => {
        try {
            const { granted } = await requestPermission()
            if(!granted) Alert.alert(
                "Câmera",
                "Você precisa habilitar o uso da câmera para utilizar esse recurso"
            )
            qrLock.current = false
            setIsVisibleCameraModal(true)
        } catch (error) {
            console.log(error)
            Alert.alert("Câmera", "Não foi possível utilizar a câmera")
        }
    }

    const getCoupon = async (id: string) => {
        try {
            setCouponIsFetching(true)

            const { data } = await api.patch("/coupons/" + id)
            Alert.alert("Cupom", data.coupon)
            setCoupon(data.coupon)
        } catch (error) {
            console.log(error)
            Alert.alert("Erro", "Não foi possível utilizar o cupom")
        } finally {
            setCouponIsFetching(false)
        }
    }

    const handleUseCoupon = (id: string) => {
        setIsVisibleCameraModal(false)
        Alert.alert(
            "Cupom",
            "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",[
                { style: "cancel", text: "Não" },
                { style: "cancel", text: "Sim", onPress: () => getCoupon(id)},
            ]
        )
    }

    useEffect(() => {
        fetchMarket()
    }, [params.id, coupon])

    return !market ? <Loading /> : (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Cover uri={market.cover} />
                <Details market={market}/>
                {coupon && <Coupon code={coupon}/>}
            </ScrollView>

            <View style={{ padding: 32 }}>
                <Button onPress={() => handleOpenCamera()}>
                    <Button.Icon icon={IconQrcode}/>
                    <Button.Title> Ler QR Code</Button.Title>
                </Button>
            </View>

            <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
                <CameraView
                    style={{ flex: 1 }}
                    facing="back"
                    onBarcodeScanned={({ data }) => {
                        if(data && !qrLock.current){
                            qrLock.current = true
                            handleUseCoupon(data)
                        }
                    }}
                />

                <View style={{ flex: 1, position: "absolute", bottom: 24, left: 32, right: 32 }}>
                    <Button
                        isLoading={couponIsFetching}
                        onPress={() => setIsVisibleCameraModal(false)}
                    >
                        <Button.Title>Voltar</Button.Title>
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

export default Market
