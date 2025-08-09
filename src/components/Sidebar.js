// src/components/Sidebar.js
import { SafeAreaView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { SearchIcon } from './Icons';
import ProjectListItem from './ProjectListItem';

// Podaci organizirani za SectionList
const PROJECT_SECTIONS = [
  {
    title: 'Danas',
    data: [
      {
        id: '1',
        title: 'guitarinform.',
        type: 'Mobile',
        image: require('../../assets/images/guitarinform.jpg'), // Pozivamo lokalnu sliku
      },
    ],
  },
  {
    title: 'Primjeri',
    data: [
      {
        id: '2',
        title: 'Indoor Plant Care Dashboard',
        type: 'Web',
        image: require('../../assets/images/plant-dashboard.png'),
      },
      {
        id: '3',
        title: 'Alps skiing guide',
        type: 'Mobile',
        image: require('../../assets/images/alps-guide.png'),
      },
      {
        id: '4',
        title: 'Ceramic & Pottery Marketplace',
        type: 'Mobile',
        image: require('../../assets/images/pizza-class.png'), // Koristimo jednu od postojećih kao zamjenu
      },
      {
        id: '5',
        title: 'Board game club planner',
        type: 'Mobile',
        image: require('../../assets/images/board-game.png'),
      },
      {
        id: '6',
        title: 'Personal photo library',
        type: 'Web',
        image: require('../../assets/images/photo-library.png'),
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputWrapper}>
            <SearchIcon style={styles.searchIcon} />
            <TextInput
              placeholder="Search designs"
              placeholderTextColor={Colors.textSecondary}
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Lista Projekata */}
        <SectionList
          sections={PROJECT_SECTIONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProjectListItem
              title={item.title}
              type={item.type}
              image={item.image}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.topLayer,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12, // Malo prostora na vrhu
  },
  searchContainer: {
    marginBottom: 12, // Razmak ispod tražilice
  },
  searchInputWrapper: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 8,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: 14,
  },
  listContent: {
    paddingBottom: 20, // Da zadnji item ne bude zalijepljen za dno
  },
  sectionHeader: {
    color: Colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default Sidebar;
    