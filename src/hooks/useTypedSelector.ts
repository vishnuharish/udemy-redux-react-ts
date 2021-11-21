import {RootState} from "../state/reducers";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const  useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
