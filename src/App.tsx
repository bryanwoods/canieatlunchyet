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

  public componentDidMount(): void {
    setInterval(() => this.tick(), 1000);
  }

  public render(): JSX.Element {
    return (
      <h1>{this.isLunchTime()}</h1>
    );
  }

  private getTime = () => new Date();

  private tick(): void {
    this.setState((state) => {
      const time = this.getTime();

      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      };
    });
  }

  private greetingMessage = (): string => {
    const NOON = 12;
    const ONE_PM = 13;

    const { hour, minute, second } = this.state;

    const afternoon = (hour === 12 && (minute >= 1 || second >= 1))

    if (hour <= NOON && !afternoon) {
      return 'NO';
    }
    else if (hour >= NOON && hour < ONE_PM) {
      return 'YES';
    }
    else {
      return 'YOU ALREADY ATE';
    }
  };

  private isLunchTime(): string {
    return this.greetingMessage();
  }
}

export default App;