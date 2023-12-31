import React from "react";

/**
 * This component renders an error message to ensure that our graphiz data is safe to users
 * content whenever they typed something wrong and this error boundary would immediately render
 * the default data whenever something is wrong.
 */

class ErrorBoundery extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error : null, errorInfo : null, hasError: false };
      this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    }

    static getDerivedStateFromError(error) {
        // Capture the error and update state
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error, hasError: true, errorInfo });
    }

    resetErrorBoundary() {
      this.props.runData()
      this.setState({ hasError: false });
    }

    componentDidUpdate(prevProps) {
        // the idea here is it would check if the component updates and if it updates
        // it would check if the before key is the same as now which is not 
        // then it would fix it afterwards
        if (this.props.jsKey !== prevProps.jsKey && this.state.hasError) {
          // Reset the error state if the JS code changes
          this.setState({ hasError: false });
        }
    }

    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h1>Something went wrong!</h1>
            {/* { this.state.error } */}
            <p>recommended to start over and go back to its previous changes.</p>
          </div>
        );
      }

      return this.props.children;
    }
  }

export default ErrorBoundery