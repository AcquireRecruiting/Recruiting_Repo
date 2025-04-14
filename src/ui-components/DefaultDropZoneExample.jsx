
export default function DefaultDropZoneExample() {
    const [files, setFiles] = React.useState([]);
    return (
      <>
        <DropZone
          onDropComplete={({ files }) => {
            setFiles(files);
          }}
        >
          Drag images here
        </DropZone>
        {files.map((file) => (
          <Text key={file.name}>{file.name}</Text>
        ))}
      </>
    );
  }