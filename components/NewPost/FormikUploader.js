import { View, Text, TextInput, Image, Button } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik, formik } from 'formik'
import { useState } from 'react'
import { Divider } from 'react-native-elements'

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required.'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.').required('Caption is required.'),
});

const Placeholder_img = 'https://reactnative.dev/img/tiny_logo.png'

const FormikUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(Placeholder_img)

    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}>

            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image source={{ uri: thumbnailUrl ? thumbnailUrl : Placeholder_img }} style={{ width: 100, height: 100 }} />
                        <View style={{ flex: 1, marginLeft: 15 }}>

                            <TextInput placeholder='Write a caption'
                                style={{ color: 'black', fontSize: 20 }}
                                placeholderTextColor={'gray'}
                                multiline={true}
                                numberOfLines={4}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput placeholder='Enter Image URL'
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'black', fontSize: 18 }}
                        placeholderTextColor={'black'}
                        multiline={true}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />

                </>
            )
            }
        </Formik>
    )
}

export default FormikUploader