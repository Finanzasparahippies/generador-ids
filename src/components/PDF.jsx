import {
    Document,
    Text,
    Page,
    View,
    StyleSheet,
    Image,
} from "@react-pdf/renderer";
import cssPDF from "../helpers/cssPDF";
import FotoId from "../assets/img/padilla-rodtiguez.gif";
import Logo from "../assets/img/logo-master-oro.png";
import Fondo from "../assets/img/fondo2.jpg";
import AFESLogo from "../assets/img/AFES-transp.png";
import FMFamateur from "../assets/img/FMFSA.png";

// estilos del PDF

const styles = StyleSheet.create(cssPDF);

// Fecha Para la credencial
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const DetalleJugador = {
    nombres: "Armando",
    apellidos: "Padilla Rodríguez",
    edad: "55",
    equipo: "La Candelaria",
    nui: "1234567890",
    firmaJugador: "_______________",
    firmaDelegado: "_______________",
};
const inputsJugador = {
    nombres: "Nombres:",
    apellidos: "Apellidos:",
    edad: "Edad:",
    equipo: "Equipo:",
    nui: "NUI:",
    firmaJugador: "Firma del Jugador:",
    firmaDelegado: "Firma del Delegado:",
    categoria: "Categoria:",
};

const DatosPersonales = {
    fecha: `Hermosillo, Sonora a ${day} de ${month} del ${year}`,
    nacimiento: `10/10/1965`,
    tipoSangre: "O+(Positivo)",
    curp: `PARA-651010-HDFRDR01`,
    domicilio: `Calle 12 # 123 Col. Centro`,
    telefono: `6621234567`,
    contactoEmergencia: `Juanita Rodriguez`,
    telefonoEmergencia: `6627654321`,
}

const inputsPersonales = {
    fecha: "Fecha de Expedición:",
    nacimiento: "Nacimiento:",
    tipoSangre: "Tipo de Sangre:                 ",
    curp: "CURP:",
    domicilio: "Domicilio:",
    telefono: "Telefono:",
    contactoEmergencia: "Contacto de Emergencia:",
    telefonoEmergencia: "Telefono de Emergencia:",
}

const Categoria = {
    categoria: "C",
};

// Componente PDF
function PDF() {
    <>
{/* <PDFViewer width="800" height="800"> */}
    <Document>
        <Page size={"A7"} orientation="portrait" style={styles.page}>
            <Image style={styles.imageBG} src={Fondo} />
            <View style={styles.sectionTitle}>
                <Image style={styles.imageLogo} src={Logo} />
                <Text style={styles.title}>Liga Master Oro Hermosillo</Text>
            </View>
            <Image style={styles.imageId} src={FotoId} />
            <View style={styles.sectionDetalles}>
                <Text style={styles.inputsJugador}>{inputsJugador.nui}</Text>
                <Text style={styles.detalleNUI}>{DetalleJugador.nui}</Text>
                <Text style={styles.inputsJugador}>
                    {inputsJugador.nombres}
                </Text>
                <Text style={styles.detallesJugador}>
                    {DetalleJugador.nombres}
                </Text>
                <Text style={styles.inputsJugador}>
                    {inputsJugador.apellidos}
                </Text>
                <Text style={styles.detallesJugador}>
                    {DetalleJugador.apellidos}
                </Text>
                <Text style={styles.inputsJugador}>{inputsJugador.edad}</Text>
                <Text style={styles.detallesJugador}>
                    {DetalleJugador.edad}
                </Text>
                <Text style={styles.inputsJugador}>{inputsJugador.equipo}</Text>
                <Text style={styles.detallesJugador}>
                    {DetalleJugador.equipo}
                </Text>
                <Text style={styles.inputsJugador}>
                    {inputsJugador.categoria}
                </Text>
                <Text style={styles.categoria}>
                    <br />
                    {Categoria.categoria}
                </Text>
            </View>
            <View style={styles.sectionSigns}>
                <Text style={styles.firmaJugador}>
                    {inputsJugador.firmaJugador}
                </Text>
                <Text style={styles.firmaJugador}>
                    {DetalleJugador.firmaJugador}
                </Text>
                <Text style={styles.firmaDelegado}>
                    {inputsJugador.firmaDelegado}
                </Text>
                <Text style={styles.firmaDelegado}>
                    {DetalleJugador.firmaDelegado}
                </Text>
            </View>
        </Page>
        <Page size={"ID1"} orientation="portrait" style={[styles.pageBelow]}>
            <Image style={styles.imageBG} src={Fondo} />
            <View style={styles.sectionTitle}>
                <Image style={styles.imageLogoBack} src={AFESLogo} />
                <Image style={styles.imageLogoFMF} src={FMFamateur} />
                <Text style={styles.title}>
                    Asociación De Futbol Del Estado de Sonora
                </Text>
                <Text style={styles.subTitle}>
                    Afiliados a la Federacion Mexicana del Futbol del Sector
                    Amateur
                </Text>
                <Text
                    style={{
                        whiteSpace: "nowrap",
                        position: "absolute",
                        top: 50,
                        left: 70,
                        margin: -5,
                        width: 120,
                        fontFamily: "Times-Bold",
                        fontSize: 12,
                        textAlign: "center",
                    }}
                    >
                    Datos del Jugador
                </Text>
            </View>
            <View style={styles.sectionDatosPersonales}>
                <Text style={styles.inputsPersonales}>{inputsPersonales.fecha}</Text>
                <Text style={styles.DatosPersonales}>{DatosPersonales.fecha}</Text>
                <Text style={styles.inputsPersonales}>{inputsPersonales.nacimiento}</Text>
                <Text style={styles.DatosPersonales}>{DatosPersonales.nacimiento}</Text>
                <Text style={styles.inputTipoSangre}>
                    {inputsPersonales.tipoSangre}
                <Text style={styles.DatosTipoSangre}>{DatosPersonales.tipoSangre}</Text>
                </Text>
                <Text style={styles.inputsPersonales}>{inputsPersonales.curp}</Text>
                <Text style={styles.DatosPersonales}>
                    {DatosPersonales.curp}
                </Text>
                <Text style={styles.inputsPersonales}>
                    {inputsPersonales.domicilio}
                </Text>
                <Text style={styles.DatosPersonales}>{DatosPersonales.domicilio}</Text>
                <Text style={styles.inputsPersonales}>{inputsPersonales.contactoEmergencia}</Text>
                <Text style={styles.DatosPersonales}>
                    {DatosPersonales.contactoEmergencia}
                </Text>
                <Text style={styles.inputsPersonales}>{inputsPersonales.telefonoEmergencia}</Text>
                <Text style={styles.DatosPersonales}>
                    {DatosPersonales.telefonoEmergencia}
                </Text>
            </View>
        </Page>
    </Document>

{/* </PDFViewer> */}
</>
};

// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);


export default PDF;
