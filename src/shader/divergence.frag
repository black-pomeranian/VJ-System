vec2 pL = vec2(vUV.x - 1.0 * uTD2DInfos[0].res.x, vUV.y);
vec2 pR = vec2(vUV.x + 1.0 * uTD2DInfos[0].res.x, vUV.y);
vec2 pT = vec2(vUV.x, vUV.y + 1.0 * uTD2DInfos[0].res.y);
vec2 pB = vec2(vUV.x, vUV.y - 1.0 * uTD2DInfos[0].res.y);

out vec4 fragColor;
void main()
{

    float L = texture(sTD2DInputs[0], pL).x;
    float R = texture(sTD2DInputs[0], pR).x;
    float T = texture(sTD2DInputs[0], pT).y;
    float B = texture(sTD2DInputs[0], pB).y;
    
    vec2 C = texture(sTD2DInputs[0], vUV.xy).xy;
    
    if (pL.x < 0.0){ L = -C.x;}
    if (pL.x > 1.0){ R = -C.x;}
    if (pL.y < 0.0){ L = -C.y;}
    if (pL.y > 1.0){ R = -C.y;}

    float divergence = 0.5 * (R - L + T - B);
    
    vec4 color = vec4(divergence, 0.0, 0.0, 1.0);
    fragColor = TDOutputSwizzle(color);
}
