import { FunnelIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import Breadcrumbs from "../components/Breadcrumbs";
import Header1 from "../components/Header1";
import NamaUjian from "../components/NamaUjian";
import Sidebar, { NavbarEnum } from "../components/Sidebar";
import Tabs from "../components/Tabs";

export default function UjianAndaSession(){
    return(
        <div className="bg-[#EFF0F3] flex text-black">

            <input type="checkbox" id="add-session" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="add-session" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Tambah Session</h3>
                        <div className="block">
                            <div className="justify-between flex w-full mt-5">
                                <p className="self-center">Nama Session</p>
                                <input type="text" placeholder="Masukkan nama session ..." className="input input-bordered w-[300px]"/>
                            </div>
                            <div className="justify-between flex w-full mt-5">
                                <p className="self-center">Ujian Dibuka</p>
                                <input type="datetime-local" name="" id="" className="input input-bordered w-[300px]" />
                            </div>
                            <div className="justify-between flex w-full mt-5">
                                <p className="self-center">Ujian Ditutup</p>
                                <input type="datetime-local" name="" id="" className="input input-bordered w-[300px]" />
                            </div>
                        </div>
                        <div className="modal-action">
                        <label htmlFor="add-session" className="btn">Simpan</label>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="trash-icon" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="trash-icon" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Hapus Session</h3>
                        <p className="py-4">Apakah anda yakin ingin menghapus session ini?</p>
                        <div className="modal-action">
                        <label htmlFor="trash-icon" className="btn">Ya</label>
                        <label htmlFor="trash-icon" className="btn">Tidak</label>
                    </div>
                </div>
            </div>

            {/* SIDEBAR */}
            <Sidebar active={NavbarEnum.UJIANANDA}/>

            <div className='mr-[24px] w-full ml-6 pl-[240px]'>
                <Header1/>
                <Breadcrumbs/>
                <NamaUjian/>
                <Tabs/>

                <div className='mb-[30px] mt-[30px]'>
                    <label htmlFor="add-session" className="btn btn-primary mr-5">
                        <PlusCircleIcon className='h-[20px] w-[20px] mr-[15px] my-auto'/>
                        <p className='my-auto text-xs'>Session</p>
                    </label>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn m-1">
                            <FunnelIcon className='h-[20px] w-[20px] mr-[15px] my-auto'/>
                            <p className='my-auto text-xs'>Filter</p>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a>
                                    <p className='my-auto text-xs'>Berdasarkan Selesai</p>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <p className='my-auto text-xs'>Berdasarkan Belum Selesai</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="overflow-x-auto font-['Roboto'] mb-[30px]">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                                </th>
                                <td>Nomor</td>
                                <th>Nama Session</th>
                                <th>Ujian Dibuka</th>
                                <th>Ujian Ditutup</th>
                                <th>Status</th>
                                <th>Kode Ujian</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="text-sm">
                            <tr>
                                <th>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                                </th>
                                <td>1</td>
                                <td>Session 1</td>
                                <td>30 Sept 2022, 10:45</td>
                                <td>30 Sept 2022, 10:45</td>
                                <td>Selesai</td>
                                <td>fas789sd</td>
                                <td className="flex gap-[15px]">
                                    <label htmlFor="trash-icon">
                                        <TrashIcon className="w-[24px] h-[24px] self-center text-red-500"/>
                                    </label>
                                </td>
                            </tr>
                            
                            <tr>
                                <th>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                                </th>
                                <td>2</td>
                                <td>Session 2</td>
                                <td>30 Sept 2022, 10:45</td>
                                <td>30 Sept 2022, 10:45</td>
                                <td>Selesai</td>
                                <td>fas789sd</td>
                                <td className="flex gap-[15px]">
                                    <label htmlFor="trash-icon">
                                        <TrashIcon className="w-[24px] h-[24px] self-center text-red-500"/>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                                </th>
                                <td>3</td>
                                <td>Session 3</td>
                                <td>30 Sept 2022, 10:45</td>
                                <td>30 Sept 2022, 10:45</td>
                                <td>Selesai</td>
                                <td>fas789sd</td>
                                <td className="flex gap-[15px]">
                                    <label htmlFor="trash-icon">
                                        <TrashIcon className="w-[24px] h-[24px] self-center text-red-500"/>
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