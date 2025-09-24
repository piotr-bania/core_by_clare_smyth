// /public/shaders/transition.frag
precision highp float;

// Inputs
uniform float progress;        // 0.0 -> 1.0
uniform float uTransparency;   // usually 1.0
uniform float strength;        // e.g. 0.1
uniform sampler2D uTexture1;   // from
uniform sampler2D uTexture2;   // to

varying vec2 vUv;

vec4 getFromColor(vec2 uv){ return texture2D(uTexture1, uv); }
vec4 getToColor  (vec2 uv){ return texture2D(uTexture2, uv); }

void main() {
vec2 p = vUv;

vec4 ca = getFromColor(p);
vec4 cb = getToColor(p);

// derive directional offsets from colour (mono-ish)
vec2 oa = (((ca.rg + ca.b) * 0.5) * 2.0 - 1.0); // -1..1
vec2 ob = (((cb.rg + cb.b) * 0.5) * 2.0 - 1.0); // -1..1
vec2 oc = mix(oa, ob, 0.5) * strength;

float w0 = progress;
float w1 = 1.0 - w0;

vec4 col =
    mix(
        getFromColor(p + oc * w0),
        getToColor  (p - oc * w1),
        progress
    );

  gl_FragColor = col * uTransparency;
}
