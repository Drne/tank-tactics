export default function getDistanceBetweenPositions(pos1, pos2) {
    if (!pos1) {
        return 1000
    }
    const distanceBetweenX = Math.abs(pos1[1] - pos2[1])
    const distanceBetweenY = Math.abs(pos1[0] - pos2[0])

    return Math.max(distanceBetweenX, distanceBetweenY);
}