uniform sampler2D uEarthTexture;
varying vec2 vertexUV; // [u,v]
varying vec3 vertexNormal;


void main() {
    float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

    gl_FragColor = vec4(atmosphere + texture2D(uEarthTexture, vertexUV).xyz, 1.0);

}