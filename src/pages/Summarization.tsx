import HeaderTitle from "../components/HeaderTitle"
import TextAreaForm from "../components/summarization/TextAreaForm"
import SelectDocument from "../components/summarization/SelectDocument";
import SimpleText from "../components/element/SimpleText";

export default function Summarization() {
    return (
        <>
            <div>
                <HeaderTitle/>
                <SimpleText
                    text="Input Teks:"
                    twClass="font-bold my-2 font-header"
                />

                <TextAreaForm/>
                <SimpleText
                    text="Input Dokumen PDF:"
                    twClass="font-bold mt-20 mb-2 font-header"
                />
                <SelectDocument/>
            </div>
        </>
    )
}