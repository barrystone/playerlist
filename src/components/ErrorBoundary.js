import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  //   static getDerivedStateFromError(error) {
  //     // 更新 state 以至於下一個 render 會顯示 fallback UI
  //     return { hasError: true };
  //   }
  render() {
    return this.state.hasError ? <h1>something wrong</h1> : this.props.children;
  }
}

export default ErrorBoundary;
