import React, { Fragment } from "react";
import { Modal, ScrollView } from "react-native";

import { useEvents } from "../../hooks/useEvents";

import { CountComponent } from "../../components/Count";
import { Warning } from "../../components/Icons/Warning";
import { HeadingComponent } from "../../components/Heading";
import { ContentModal } from "../../components/Contents/Modal";

import { IEventProps } from "./types";

import * as S from "./styles";
import { Title } from "../../global/styles";

export default function HomeScreen() {
  const { myEvents, showModalAdd, setShowModalAdd } = useEvents();

  return (
    <Fragment>
      <S.Container>
        <HeadingComponent />

        <S.Content>
          <Title size={32}>My events</Title>
          <ScrollView>
            {myEvents.length > 0 ? (
              myEvents.map((event: IEventProps, index: number) => {
                return (
                  <CountComponent
                    key={`${index}`}
                    event={event}
                    index={index}
                  />
                );
              })
            ) : (
              <Warning description="No events registered" />
            )}
          </ScrollView>
        </S.Content>
      </S.Container>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModalAdd}
        onRequestClose={() => setShowModalAdd(false)}
      >
        <ContentModal />
      </Modal>
    </Fragment>
  );
}
