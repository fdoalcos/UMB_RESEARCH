import React from "react";

class ErrorBoundery extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            error,
            errorInfo
        })
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    { this.state.error }
                </div>
            )
        }

        return this.props.children; 
    }
}

export default ErrorBoundery