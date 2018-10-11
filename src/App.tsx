import * as React from 'react';
import { Component } from 'react';

interface IState {
  hour: number,
  minute: number,
  second: number
}

class App extends Component<{}, IState> {
  public constructor(props: any) {
    super(props);

    const currentTime = this.getTime();

    this.state = {
      hour: currentTime.getHours(),
      minute: currentTime.getMinutes(),
      second: currentTime.getSeconds()
    }
  }

  public getTime = () => new Date();

  public tick(): void {
    this.setState((state) => {
      const time = this.getTime();

      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      };
    });
  }

  public componentDidMount(): void {
    setInterval(() => this.tick(), 1000);
  }

  public greetingMessage = (): string => {
    const { hour, minute, second } = this.state;

    const afternoon = (hour === 12 && (minute >= 1 || second >= 1))

    if (hour <= 12 && !afternoon) {
      return 'NO';
    }
    else if (hour >= 12 && hour < 13) {
      return 'YES'
    }
    else {
      return 'YOU ALREADY ATE'
    }
  };

  public isLunchTime(): string {
    return this.greetingMessage();
  }

  public render(): JSX.Element {
    return (
      <h1>{this.isLunchTime()}</h1>
    );
  }
}

export default App;