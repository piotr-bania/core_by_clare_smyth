// /public/shaders/transition.frag
precision highp float;

uniform float progress;        // 0 → 1
uniform float uTransparency;   // usually 1.0
uniform sampler2D uTexture1;   // from
uniform sampler2D uTexture2;   // to

varying vec2 vUv;

vec4 getFromColor(vec2 uv) { return texture2D(uTexture1, uv); }
vec4 getToColor  (vec2 uv) { return texture2D(uTexture2, uv); }

vec2 offset(float progress, float x, float theta) {
    float phase = progress * progress + progress + theta;
    float shifty = 0.03 * progress * cos(10.0 * (progress + x));
    return vec2(0.0, shifty);
}

void main() {
    vec2 p = vUv;
    vec4 col = mix(
        getFromColor(p + offset(progress,        p.x, 0.0)),
        getToColor  (p + offset(1.0 - progress, p.x, 3.14159)),
        progress
    );
    gl_FragColor = col * uTransparency;
}
