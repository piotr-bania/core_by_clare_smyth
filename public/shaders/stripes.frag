precision highp float;

uniform float progress;          // 0 → 1
uniform float count;             // number of vertical stripes (e.g., 10.0)
uniform float smoothness;        // 0..1 softness of the wipe edge (e.g., 0.5)
uniform float uTransparency;     // multiply final alpha if you need it (1.0 default)
uniform sampler2D uTexture1;     // from
uniform sampler2D uTexture2;     // to

varying vec2 vUv;

vec4 getFromColor(vec2 uv) { return texture2D(uTexture1, uv); }
vec4 getToColor(vec2 uv)   { return texture2D(uTexture2, uv); }

void main() {
    // progress ramp along X with soft edge
    float pr = smoothstep(-smoothness, 0.0, vUv.x - progress * (1.0 + smoothness));
    // stripe mask: alternate stripes using fractional repetition
    float s = step(pr, fract(count * vUv.x));
    vec4 col = mix(getFromColor(vUv), getToColor(vUv), s);
    gl_FragColor = col * uTransparency;
}