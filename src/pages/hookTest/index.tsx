import React, {
    createContext,
    forwardRef,
    useContext,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    // unstable_LegacyHidden as LegacyHidden,
    // unstable_Offscreen as Offscreen,
} from "react";

import { flushSync } from "react-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import styles from "./index.module.less";

interface Iprops {
    match?: Object;
}

interface Istate {
    count: number;
}

const initialState: Istate = { count: 0 };

export const number3 = (state: Istate, action: { type: string }) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error("未找到相应的action");
    }
};

const ThemeContext = createContext({ color: "red" });
interface IinputProps {}
const FancyInput: React.ForwardRefRenderFunction<
    { focus: () => void },
    IinputProps
> = (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(
        ref,
        () => ({
            focus: () => {
                if (inputRef.current !== null) {
                    inputRef.current.focus();
                }
            },
        }),
    );
    return <input ref={inputRef} />;
};
const FancyInputC = forwardRef(FancyInput);

const HookTest: React.FunctionComponent<Iprops> = ({ match }) => {
    const [num, setNum] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [state, dispatch] = useReducer(number3, initialState);
    const context = useContext(ThemeContext);
    const memo = useMemo(() => num ** num2, [num, num2]);
    const inputRef = useRef<HTMLInputElement>(null);
    const count = useSelector((state: RootState) => state.count, shallowEqual);
    const dispatch2 = useDispatch<Dispatch>();
    // const callBack = useCallback()

    const setNumCb = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(e.currentTarget);
        if (inputRef.current !== null) {
            inputRef.current.focus();
        }
        setNum((num) => num + 1);
    };

    const setNumCb2 = (e?: React.MouseEvent) => {
        setNum2((num2) => num2 + 1);
    };

    useEffect(() => {
        console.log(match);
        return () => {
            console.log("delete" + match);
        };
    }, [match]);

    useEffect(() => {
        console.log(num, num2, state);
        return () => {
            console.log("卸载", num, num2, state);
        };
    }, [num, num2, state]);
    // 带dom操作副作用的hooks
    useLayoutEffect(() => {
        document.title = `第 ${num} 页`;
        console.log(12);
    }, [num]);

    return (
        <div style={{ height: "200px", width: "200px", color: "red" }}>
            <div style={context} className={styles.title} onClick={setNumCb}>
                {num}
                {" "}
            </div>
            <div onClick={setNumCb2}>{num2} </div>
            {`最新值${num ** num2}
            原始值${memo}`}
            <div style={{ color: "blue" }}>{state.count}</div>
            <FancyInputC ref={inputRef} />
            <div
                style={{ color: "red" }}
                onClick={() => {
                    // dispatch2.count.add(1)
                    dispatch2.count.incrementAsync();
                }}
            >
                {count}
            </div>
            <button
                onClick={() => {
                    // flushSync(() => dispatch({ type: 'increment' }))
                    dispatch({ type: "increment" });
                    setNumCb2();
                }}
            >
                +
            </button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    );
};

export default HookTest;
