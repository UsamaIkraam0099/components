import React, {useState} from 'react';
import {Text, View, Linking, TouchableOpacity} from 'react-native';

// others
import {en} from 'language';
import styles from './styles';
import {Container} from 'layout';
import {MusicCategory} from './components';
import {MUSIC_APPS, MUSIC_CATEGORY} from './utils';
import {InstalledApps, RNLauncherKitHelper} from 'react-native-launcher-kit';

function PlayingImages() {
  // state variables
  const [category, setCategory] = useState('');

  // React.useEffect(() => {
  //   const result = InstalledApps.getSortedApps();

  //   if (result.length > 0) {
  //     for (let key in result) {
  //       if (['Spotify', 'YT Music'].includes(result[key].label)) {
  //         console.log({
  //           label: result[key].label,
  //           packageName: result[key].packageName,
  //         });
  //       }
  //     }
  //   }
  // }, []);

  const openExternalApp = async (type: string) => {
    if (!category) return alert(en.category_error);

    let result: boolean = false;
    let app: any = MUSIC_APPS.filter(
      item => type == item.name.toLowerCase(),
    )[0];

    switch (type) {
      case 'spotify':
        result = await RNLauncherKitHelper.checkIfPackageInstalled(
          app.bundleId,
        );

        if (result) {
          const url = MUSIC_CATEGORY.filter(item => item.label === category)[0]
            .spId;
          Linking.openURL(url);
        }

        break;
      case 'yt music':
        result = await RNLauncherKitHelper.checkIfPackageInstalled(
          app.bundleId,
        );

        if (result) {
          const url = MUSIC_CATEGORY.filter(item => item.label === category)[0]
            .ytId;
          Linking.openURL(url);
        }
        // 'https://music.youtube.com/playlist?list=PLIN7k-viJR7Mf9BwL7zmYdDQKCaUaIKWU',
        // RNLauncherKitHelper.launchApplication(app.bundleId);

        break;
    }
  };

  console.log({category});

  const opacity: number = !category ? 0.7 : 1;
  const disabled: boolean = !category ? true : false;

  return (
    <Container left={true} headerLabel={en.zed_ask}>
      <View style={[styles['main-container']]}>
        <Text style={styles['title-label']}>
          {en.music} {en.category}
        </Text>
        <MusicCategory category={category} onPress={setCategory} />

        <TouchableOpacity
          disabled={disabled}
          activeOpacity={0.8}
          onPress={() => openExternalApp('yt music')}
          style={[styles['btn-container'], {opacity}]}>
          <Text style={styles['btn-label']}>{en.open_yt_music}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={disabled}
          activeOpacity={0.8}
          onPress={() => openExternalApp('spotify')}
          style={[styles['btn-container'], styles['spotify-btn'], {opacity}]}>
          <Text style={styles['btn-label']}>{en.open_spotify}</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default PlayingImages;
