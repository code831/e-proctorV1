import QuestionForm from "../../../components/forms/QuestionForm";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import SidebarGuru, {
  NavbarEnum,
} from "../../../components/sidebar/SidebarGuru";
import Header from "./header";
import TabsBankSoal from "./tabs";

// https://npm.io/package/react-quilljs

const breadcrumb = [
  { url: "/", name: "Dashboard" },
  { url: "/q/bank", name: "Bank Soal" },
  { url: "#", name: "Buat Pertanyaan" },
];

export default function BankSoalBuatPertanyaan() {
  return (
    <div className="bg-[#EFF0F3] min-h-screen h- flex text-black">
      <SidebarGuru active={NavbarEnum.BANKSOAL} />

      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />
        <Breadcrumbs breadcrumbItems={breadcrumb} />
        <QuestionForm />
      </div>
    </div>
  );
}
