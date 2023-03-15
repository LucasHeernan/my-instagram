import React from "react";
import { View } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";

export default function ProfileGrid() {

  return (
    <Grid style={{ paddingVertical: 3 }}>
      <Row style={{ height: 150 }}>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
      </Row>
      <Row style={{ height: 150 }}>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
      </Row>
      <Row style={{ height: 150 }}>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
      </Row>
      <Row style={{ height: 150 }}>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
        <Col style={{ margin: 1 }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "black", opacity: 0.1 }}/>
        </Col>
      </Row>
    </Grid>
  )
}