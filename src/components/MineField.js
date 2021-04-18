import React from 'react';
import {StyleSheet, View} from 'react-native';
import Field from './Field';

export default (props) => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((filed, c) => {
      return (
        <Field
          {...filed}
          key={c}
          onOpen={() => props.onOpenField(r, c)}
          onSelect={(e) => props.onSelectField(r, c)}
        />
      );
    });
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View key={r} style={{flexDirection: 'row'}}>
        {columns}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});
