export default function textureGen(id?: string) {
  const idInt = parseInt(id || '0');
  const idTex = Math.abs(Math.floor(Math.sin(idInt) * 8)); // 8 textures

  return `/assets/textures/${idTex}.jpg`;
}
