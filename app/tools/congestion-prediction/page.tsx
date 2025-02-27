"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip, // Import Tooltip from recharts
} from "recharts"

export default function CongestionPredictionPage() {
  const [routerId, setRouterId] = useState("Router X")
  const [trafficVolume, setTrafficVolume] = useState("500")
  const [predictionData, setPredictionData] = useState([])

  const handlePredict = () => {
    const volume = parseFloat(trafficVolume)
    const congestionThreshold = 800 // Example threshold

    if (volume > congestionThreshold) {
      setPredictionData([
        { time: "T + 5 min", volume: volume + 20 },
        { time: "T + 10 min", volume: volume + 40 },
        { time: "T + 15 min", volume: volume + 60 },
      ])
    } else {
      setPredictionData([
        { time: "T + 5 min", volume: volume + 5 },
        { time: "T + 10 min", volume: volume + 10 },
        { time: "T + 15 min", volume: volume + 15 },
      ])
    }
  }

  return (
    <div className="container">
      <Card>
        <CardHeader>
          <CardTitle>Congestion Prediction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label htmlFor="routerId">Router ID</Label>
          <Input
            type="text"
            id="routerId"
            value={routerId}
            onChange={(e) => setRouterId(e.target.value)}
          />
          <Label htmlFor="trafficVolume">Traffic Volume</Label>
          <Input
            type="number"
            id="trafficVolume"
            value={trafficVolume}
            onChange={(e) => setTrafficVolume(e.target.value)}
          />
          <Button onClick={handlePredict}>Analyze</Button>

          {predictionData.length > 0 && (
            <div>
              <h4 className="font-semibold">Predicted Traffic Volume</h4>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={predictionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="volume" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
