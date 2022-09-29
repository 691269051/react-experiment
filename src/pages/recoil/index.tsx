import { useRecoilState, atom, DefaultValue } from "recoil";

import createProfiler from "@uw/rcnext/utils/profiler";
import React from "react";

const count = atom({
    key: "dddd",
    default: 0,
});

const Recoil = () => {
    const [num, setNum] = useRecoilState(count);

    return <div onClick={() => setNum((value) => value + 1)}>{num}</div>;
};

export default createProfiler(Recoil);
