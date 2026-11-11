import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from './styles';
import { Controller } from 'react-hook-form';
import { FormPageProps } from '.';
import { InputField } from '@common/components/input-field';
import { Cover } from '@common/components/cover';

export function CoverFormPage({ control }: FormPageProps) {
  const { colors } = useTheme();
  const themedStyles = styles(colors);

  return (
    <View style={themedStyles.container}>
      <Controller
        control={control}
        name="cover"
        render={({ field: { onChange, value } }) => (
          <>
            <View style={themedStyles.coverView}>
              <Cover src={value} />
            </View>
            <InputField label="Cover" onChangeText={onChange} />
          </>
        )}
      />
    </View>
  );
}
