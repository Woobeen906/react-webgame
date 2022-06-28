import React, {Component} from "react";

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
}
const scores = {
    가위: 1,
    바위: 0,
    보: -1,
}

class RSP extends Component {
    state = {
        result: '',
        imgCoord: '0',
        score: 0.
    }

    interval;

    componentDidMount() {       // 컴포넌트가 첫 랜더링된 후, 여기에 비동기 요청 많이함.
        this.interval = setInterval(() => {
            const {imgCoord} = this.state;
            if (imgCoord === rspCoords.바위) {
                this.setState({
                    imgCoord: rspCoords.가위,
                });
            } else if (imgCoord === rspCoords.가위) {
                this.setState({
                    imgCoord: rspCoords.보,
                });
            } else if (imgCoord === rspCoords.보) {
                this.setState({
                    imgCoord: rspCoords.바위,
                });
            }
        }, 1000)
    }

    componentDidUpdate() {       // 리랜더링 후

    }

    componentWillUnmount() {    // 컴포넌트가 제거되기 직전, 비동기 요청 정리 많이함,=.

    }

    onClickBtn = (choice) => {

    }

    render() {
        const {result, imgCoord, score} = this.state;
        return (
            <>
                <div id="computer"
                     style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
                <button id='rock' className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
                <button id='scissor' className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
                <button id='paper' className="btn" onClick={() => this.onClickBtn('보')}>보</button>
            </>
        )
    }
}

export default RSP;