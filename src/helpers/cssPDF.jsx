import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
        border: "5px solid black",
        width: "842px", 
        height: "595px"
    },
    pageBelow: {
        transform: 'rotate(180deg)',
        flexDirection: "column",
    },
    sectionTitle: {
        opacity: "0.8",
        flexGrow: 1,
    },
    sectionDetalles: {
        position: "relative",
        flexGrow: 1,
    },
    
    sectionDatosPersonales: {
        position: "relative",
        flexGrow: 1,
        justifyContent: "center",
    },
    
    sectionSigns: {
        position: "relative",
        bottom: 20,
        flexGrow: 2,
        opacity: 0.8,
    },

    title: {
        position: "absolute",
        top: 8,
        left: 15,
        margin: -5,
        fontFamily: "Times-Bold",
        fontSize: 14,
    },

    subTitle: {
        whiteSpace: "nowrap",
        position: "absolute",
        top: 25,
        left: 70,
        margin: -5,
        width: 120,
        fontFamily: "Times-Bold",
        fontSize: 8,
        textAlign: "center",
    },

    detallesJugador: {
        position: "relative",
        top: 15,
        left: 145,
        flexDirection: "column",
        fontSize: 10,
        textDecoration: "underline",
        textAlign: "left",
        fontFamily: "Times-BoldItalic",
    },

    inputsJugador: {
        position: "relative",
        marginBottom: -10,
        top: 17,
        left: 100,
        flexDirection: "row",
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Times-Bold",
    },

    detalleNUI: {
        position: "relative",
        top: 15,
        left: 125,
        flexDirection: "column",
        fontSize: 10,
        textDecoration: "underline",
        textAlign: "left",
        fontFamily: "Times-BoldItalic",
    },

    inputTipoSangre: {
        position: "relative",
        top: 8,
        left: 5,
        flexDirection: "row",
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Times-Bold",
    },

    DatosTipoSangre: {
        position: "relative",
        top: 0,
        left: 400,
        flexDirection: "row",
        fontSize: 8,
        textDecoration: "underline",
        textAlign: "right",
        fontFamily: "Times-BoldItalic",
    },

    inputsPersonales: {
        display: "flex",
        position: "relative",
        flexDirection: "row",
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Times-Bold",
        top: 9.5,
        left: 5,
        alignItems: "center",
        marginBottom: -5,
        marginTop: -2,
    },

    DatosPersonales: {
        position: "relative",
        flexDirection: "row",
        fontSize: 8,
        textDecoration: "underline",
        textAlign: "center",
        fontFamily: "Times-BoldItalic",
        top: 6,
        left: 115,
        alignItems: "center",
        marginBottom: -2,
        marginTop: -2,
    },

    imageId: {
        position: "absolute",
        top: 15,
        left: 0,
        width: 80,
        height: 80,
        margin: 10,
        borderStyle: "solid",
        borderColor: "#0C2950",
    },

    imageLogo: {
        position: "absolute",
        top: -12,
        left: 170,
        width: 45,
        height: 40,
        margin: 9,
    },

    imageLogoBack: {
        position: "absolute",
        top: 8,
        left: 170,
        width: 45,
        height: 40,
        margin: 9,
    },
    imageLogoFMF: {
        position: "absolute",
        top: 8,
        left: 10,
        width: 45,
        height: 40,
        margin: 9,
    },

    imageBG: {
        position: "absolute",
        paddingTop: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
    },

    firmaJugador: {
        position: "relative",
        top: 50,
        left: 20,
        flexDirection: "row",
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Times-Bold",
    },

    firmaDelegado: {
        position: "relative",
        top: 27.5,
        left: 135,
        flexDirection: "row",
        fontSize: 10,
        textAlign: "left",
        fontFamily: "Times-Bold",
    },

    categoria: {
        position: "absolute",
        top: 75,
        left: 150,
        flexDirection: "column",
        fontSize: 30,
        textAlign: "left",
        fontFamily: "Helvetica-Bold",
        color: "#0C2950"
    },

    return: {
        position: "relative",
        flexDirection: "row",
        fontSize: 10,
        textAlign: "center",
        fontFamily: "Times-Bold",
    }
    
});

export default styles;