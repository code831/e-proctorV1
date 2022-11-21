import {
  CalendarDaysIcon,
  ClockIcon,
  DocumentIcon,
  MagnifyingGlassIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../../../components/forms/Button";
import Input from "../../../components/forms/Input";
import Notifications from "../../../components/icons/Notifications";
import Settings from "../../../components/icons/Settings";
import SidebarSiswa, {
  NavbarSiswa,
} from "../../../components/sidebar/SidebarSiswa";
import useUjianActions from "../../../_actions/ujian.actions";
import { detailUjianState, ujianListState } from "../../../_state/ujian.state";

const DetailUjianSiswa = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const ujianList = useRecoilValue(ujianListState);
  const [detailUjian, setDetailUjian] = useRecoilState(detailUjianState);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {}, []);

  if (searchParams.get("p") == null) {
    return <Navigate to={{ pathname: "/ujian" }} />;
  }

  useEffect(() => {
    const id = searchParams.get("p");
    if (ujianList.length > 0) {
      ujianList.forEach((value) => {
        if (value.id == parseInt(id!)) {
          setDetailUjian(value);
          return;
        }
      });
    }

    return () => {
      setDetailUjian(undefined);
    };
  }, []);

  useEffect(() => {
    if (detailUjian) {
      console.log(detailUjian, "aa");
      setLoading(false);
    }
  }, [detailUjian]);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="bg-[#EFF0F3] min-h-screen h-full flex text-black">
      <SidebarSiswa active={NavbarSiswa.UJIANANDA} />

      {/* MODAL CARI UJIAN GAGAL */}
      <input type="checkbox" id="cari-ujian-gagal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="cari-ujian-gagal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Cari Ujian</h3>
          <p className="py-4">
            Sistem tidak menemukan ujian anda cari. Mohon ketikkan nama ujian
            dengan tepat!
          </p>
          <div className="modal-action">
            <label htmlFor="cari-ujian-gagal" className="btn">
              Kembali
            </label>
          </div>
        </div>
      </div>

      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <div className="flex gap-[30px] mt-6 justify-end">
          {/* CARI UJIAN INPUT */}
          <div className="font-['Open Sans'] items-center relative -mt-2">
            <label htmlFor="cari-ujian-sukses">
              <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-[22px] ml-[245px]" />
              <Input
                className=" pl-4 pr-[40px] rounded-[20PX] w-[280px] h-11 text-[14px]"
                placeholder="Cari Ujian ...."
              />
            </label>
          </div>
          <Notifications />
          <Settings />
        </div>

        {/* bg-[#FBFCFC] */}

        {/* Detail Ujian */}
        <div>
          <div className="flex bg-[#FBFCFC] mt-[73px] rounded-[10px]">
            {/* Gambar */}
            <div>
              <img
                src="https://th.bing.com/th/id/OIP.VOMKwFZfZ3jTK6ET8t5sxQHaNK?w=185&h=329&c=7&r=0&o=5&pid=1.7"
                className="w-[180px] h-[180px] rounded-[10px]"
              />
            </div>
            {/* Text */}
            <div className="ml-[20px] w-[800px] flex flex-col self-center">
              <h1 className="font-['Poppins'] font-semibold text-[25px]">
                {detailUjian?.quiz_name}
              </h1>
              <h4 className="mt-[22px] font-['Poppins'] font-normal text-sm mb-4">
                {detailUjian?.description}
              </h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[42px] font-['Poppins'] font-semibold">
          <div className="text-black text-center w-[120px] h-[70px]">
            <DocumentIcon className="w-[45px] h-[45px] mx-auto" />
            <p className="text-[12px] mt-1">20 soal</p>
          </div>
          <div className="text-black text-center w-[120px] h-[70px]">
            <CalendarDaysIcon className="w-[45px] h-[45px] mx-auto" />
            <p className="text-[12px] mt-1">13 September 2022</p>
          </div>
          <div className="text-black text-center w-[120px] h-[70px]">
            <ClockIcon className="w-[45px] h-[45px] mx-auto" />
            <p className="text-[12px] mt-1">20 soal</p>
          </div>
          <div className="text-black text-center w-[120px] h-[70px]">
            <PencilIcon className="w-[45px] h-[45px] mx-auto" />
            <p className="text-[12px] mt-1">20 soal</p>
          </div>
          <div className="text-black text-center w-[120px] h-[70px]">
            <div className="avatar">
              <div className="w-[45px] rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <p className="text-[12px] mt-1">
              {detailUjian?.proctor.firstname} {detailUjian?.proctor.lastname}
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-[52px]">
          <Button className="hover:bg-none">Ke Ujian Anda</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailUjianSiswa;