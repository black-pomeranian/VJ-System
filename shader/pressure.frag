vec2 pL = vec2(vUV.x - 1.0 * uTD2DInfos[0].res.x, vUV.y);
vec2 pR = vec2(vUV.x + 1.0 * uTD2DInfos[0].res.x, vUV.y);
vec2 pT = vec2(vUV.x, vUV.y + 1.0 * uTD2DInfos[0].res.y);
vec2 pB = vec2(vUV.x, vUV.y - 1.0 * uTD2DInfos[0].res.y);

out vec4 fragColor;
void main()
{

    float L = texture(sTD2DInputs[0], pL).x;
    float R = texture(sTD2DInputs[0], pR).x;
    float T = texture(sTD2DInputs[0], pT).x;
    float B = texture(sTD2DInputs[0], pB).x;
    float C = texture(sTD2DInputs[0], vUV.xy).x;
    
    float divergence = texture(sTD2DInputs[1], vUV.xy).x;
    float pressure = (L + R + T + B - divergence)*0.25;
    
    vec4 color = vec4(pressure, 0.0, 0.0, 1.0);
    fragColor = TDOutputSwizzle(color);
}
