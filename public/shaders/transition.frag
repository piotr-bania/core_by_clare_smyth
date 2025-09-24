uniform vec2 direction;
uniform float progress;
uniform float uTransparency;
uniform sampler2D uTexture1;
uniform sampler2D uTexture2;

varying vec2 vUv;

vec4 transition(vec2 uv) {
    vec2 v = normalize(direction);
    v /= abs(v.x) + abs(v.y);
    float d = v.x * 0.5 + v.y * 0.5;

    // wipe function
    float m = 1.0 - smoothstep(
    -0.5,
    0.0,
    v.x * uv.x + v.y * uv.y - (d - 0.5 + progress * (1.0 + 0.5))
    );

    vec4 c1 = texture2D(uTexture1, uv);
    vec4 c2 = texture2D(uTexture2, uv);
    return mix(c1, c2, m);
}

void main() {
    gl_FragColor = transition(vUv) * uTransparency;
}