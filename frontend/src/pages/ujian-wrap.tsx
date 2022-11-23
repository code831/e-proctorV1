import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useUjianActions from "../_actions/ujian.actions";
import { ujianListState } from "../_state/ujian.state";

const UjianWrapper = () => {
  const ujianActions = useUjianActions();
  const ujianList = useRecoilValue(ujianListState);
  useEffect(() => {
    const getUjian = async () => {
      ujianActions.list();
    };

    getUjian();
  }, []);

  return <Outlet />;
  //   return <div>{ujianList.length != 0 ? <Outlet /> : "loading..."}</div>;
};

export default UjianWrapper;
