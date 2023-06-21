import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { routesPath } from "../../../config/roteConfig";

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  errorText: string;
}

class ErrorBoundary extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false, errorText: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorText: error.message || "" };
  }

  showErrorPage = () => {
    const { errorText } = this.state;
    this.setState({ hasError: false, errorText: "" });

    return <Navigate to={routesPath.error} replace state={{ errorText }} />;
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return this.showErrorPage();
    }

    return children;
  }
}

export { ErrorBoundary };
