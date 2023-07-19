import { useDispatch } from "react-redux";
import { TAppDispatch } from "@/app/providers/StoreProvider";

type DispatchFunc = () => TAppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
