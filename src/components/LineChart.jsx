import React from "react"
import { Line } from "react-chartjs-2"
import { Col, Row, Typography } from "antd"
const { Title } = Typography
const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = []
  const coinTimestamp = []
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price)
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    )
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  }
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
  return (
    <>
      {/* <Row className="char-header" span={8} sub-element monospaced arrangement>
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Return in this time period {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-change">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row> */}
      <Row
        gutter={[16, 16]}
        className="char-header"
        justify="space-around"
        align="middle"
      >
        <Col span={8}>
          <Title level={2} className="chart-title">
            {coinName} Price Chart
          </Title>
        </Col>
        <Col span={8}>
          <Title level={5} className="price-change">
            Return in this time period {coinHistory?.data?.change}%
          </Title>
        </Col>
        <Col span={8}>
          <Title level={5} className="current-change">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart
