// /public/shaders/transition.frag
precision highp float;

uniform float progress;        // 0 → 1
uniform float uTransparency;   // usually 1.0
uniform sampler2D uTexture1;   // from
uniform sampler2D uTexture2;   // to

varying vec2 vUv;

vec4 getFromColor(vec2 uv) { return texture2D(uTexture1, uv); }
vec4 getToColor  (vec2 uv) { return texture2D(uTexture2, uv); }

void main() {
    vec2 p = vUv;
    float x = progress;
    x = smoothstep(0.0, 1.0, (x * 2.0 + p.x - 1.0));

    vec2 uvFrom = (p - 0.5) * (1.0 - x) + 0.5;
    vec2 uvTo   = (p - 0.5) * x + 0.5;

    vec4 col = mix(getFromColor(uvFrom), getToColor(uvTo), x);
    gl_FragColor = col * uTransparency;
}
