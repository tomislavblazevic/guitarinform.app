// src/components/ProjectListItem.js
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';

const ProjectListItem = ({ title, type, image }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.type}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 4, // Manji horizontalni padding za bolji izgled
  },
  imageContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4, // Zaobljeni rubovi kao u dizajnu
    backgroundColor: Colors.designBg,
    overflow: 'hidden', // Osigurava da slika ne izlazi iz okvira
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 14,
    fontWeight: '500', // Malo deblji font za naslov
  },
  type: {
    color: Colors.textSecondary,
    fontSize: 12,
  },
});

export default ProjectListItem;