import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Alert, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: {} as Error,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error: error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const {
      hasError,
      error: { name, message },
    } = this.state;
    if (hasError) {
      return (
        <Alert
          message={
            <Typography>
              <Title>Sorry.. there was an error</Title>
              <Paragraph>Name: {JSON.stringify(name)}</Paragraph>
              <Paragraph>Message: {JSON.stringify(message)}</Paragraph>
            </Typography>
          }
          type="error"
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
