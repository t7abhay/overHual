// we gonna serialize  and deserialze stuff

function serializer(data) {
  const userData = JSON.stringify(data);

  console.log(`Serialized : ${userData}`);

  return userData;
}

function deSerializer(data) {
  const deSerializedData = JSON.parse(data);

  console.log(`Deserialized : ${deSerializedData}`);
}

function invoker() {
  return { name: "kian", age: 16 };
}

const serializedData = serializer(invoker());

deSerializer(serializedData);
