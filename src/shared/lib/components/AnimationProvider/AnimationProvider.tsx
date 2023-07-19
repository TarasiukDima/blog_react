import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type TSpring = typeof import("@react-spring/web");
type TGesture = typeof import("@use-gesture/react");

interface AnimationContextPayload {
  Gesture?: TGesture;
  Spring?: TSpring;
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Needs both libs
const getAsyncAnimationModules = async () => {
  return Promise.all([
    import("@react-spring/web"),
    import("@use-gesture/react"),
  ]);
};

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = useRef<TSpring>();
  const GestureRef = useRef<TGesture>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(({ 0: Spring, 1: Gesture }) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded]
  );

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
