import {
  EyeIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Button from "../../../components/forms/Button";
import { NavbarEnum } from "../../../components/sidebar/SidebarGuru";
import SidebarGuru from "../../../components/sidebar/SidebarGuru";
import Header from "./header";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import TabsBankSoal from "./tabs";

export default function Question() {
  return (
    <div className="bg-[#EFF0F3] flex text-black">
      <input type="checkbox" id="trash-icon" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="trash-icon"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Hapus Soal dari Bank Soal</h3>
          <p className="py-4">Apakah anda yakin ingin menghapus soal ini?</p>
          <div className="modal-action">
            <label htmlFor="trash-icon" className="btn">
              Ya
            </label>
            <label htmlFor="trash-icon" className="btn">
              Tidak
            </label>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <SidebarGuru active={NavbarEnum.BANKSOAL} />

      {/* BUTTON BUAT UJIAN, CARI UJIAN(?), ICON NOTIFIKASI, DAN SETTINGS */}
      <div className="mr-[24px] w-full h-screen ml-6 pl-[240px]">
        <Header />
        <Breadcrumbs />
        <TabsBankSoal />

        <Link to={"/q/bank/create"}>
          <Button className="my-5">
            <PlusCircleIcon className="h-[20px] w-[20px] mr-[15px] my-auto" />
            <p className="my-auto text-xs">Buat Pertanyaan Baru</p>
          </Button>
        </Link>

        <div className="overflow-x-auto text-sm font-['Roboto'] mb-[30px]">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Soal</th>
                <th>Kategori</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              <tr>
                <td>1</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, illum!
                </td>
                <td>Kategori A</td>
                <td>Draft</td>
                <td className="flex gap-[15px]">
                  <EyeIcon className="w-[24px] h-[24px] self-center text-blue-500" />
                  <label htmlFor="trash-icon">
                    <TrashIcon className="w-[24px] h-[24px] self-center text-red-500" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}