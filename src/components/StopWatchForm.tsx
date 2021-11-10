import React from 'react'
import { useStopwatch } from 'react-timer-hook'

const StopWatchForm: React.FC = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false })

  function memorystart() {
    /// ここでユーザ情報と現在時刻を持ってバックエンドへデータ登録に行く
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>記録を開始するには Start ボタンを押してください。</h1>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      {isRunning ? (
        <button onClick={pause}>Pause</button>
      ) : (
        <button
          onClick={() => {
            start()
            memorystart()
          }}
        >
          Start
        </button>
      )}
      <button
        onClick={reset as unknown as React.MouseEventHandler<HTMLButtonElement>}
      >
        Reset
      </button>
    </div>
  )
}

export { StopWatchForm }
