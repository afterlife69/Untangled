import { Storage } from 'aws-amplify';
import { Camera } from 'react-native-camera';

// Function to capture and upload image
const captureAndUploadImage = async () => {
    try {
        // Capture image using React Native camera component
        const data = await this.camera.takePictureAsync({ quality: 0.5 });
        
        // Upload image to Amazon S3
        const result = await Storage.put('photo.jpg', data.uri, {
            contentType: 'image/jpeg'
        });
        console.log('Uploaded file: ', result);

        // Call function to add faces to the collection
        await addFacesToCollection('collection-name', result.key);
    } catch (error) {
        console.error('Error capturing/uploading image: ', error);
    }
}

// Component to render camera
const CameraComponent = () => {
    return (
        <Camera
            ref={(ref) => { this.camera = ref; }}
            style={{ flex: 1 }}
            type={Camera.Constants.Type.back}
            flashMode={Camera.Constants.FlashMode.off}
        >
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <TouchableOpacity onPress={captureAndUploadImage} style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, marginBottom: 10, color: 'white' }}>Capture Image</Text>
                </TouchableOpacity>
            </View>
        </Camera>
    );
}
