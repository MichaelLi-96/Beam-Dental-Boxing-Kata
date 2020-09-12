function getSummaryData(familyData) {
    const familyMemberCount = familyData.length;

    const starterBoxesCount = Math.ceil(familyMemberCount / 2);
    const starterBrushesCount = familyMemberCount;
    const starterReplacementHeadsCount = familyMemberCount;
    const refillBoxesCount = Math.ceil(familyMemberCount / 4);
    const refillReplacementHeadsCount = familyMemberCount;

    return {
        "starterBoxesCount": starterBoxesCount,
        "starterBrushesCount": starterBrushesCount,
        "starterReplacementHeadsCount": starterReplacementHeadsCount,
        "refillBoxesCount": refillBoxesCount,
        "refillReplacementHeadsCount": refillReplacementHeadsCount
    }
}

module.exports = getSummaryData;