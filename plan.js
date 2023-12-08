/**
question entity: 



user should be submit and see the latest submission

{
    submissionId:"",
    userId:"",
    questionId: "",
    submissionDetails: {
        lang: "",
        code: "",
        verdict: "",
        totalTestCases: 3893,
        passedTestCases: 48,
    },
}

i. calculate score of the question (passedTestcases / totalTestcases) * difficultyLevelScore
ii. button status can be Continue Solving(score != maxScore), SOLVED(ACCEPTED solution), Solve(open no submissions)


Questions Service(private key)
Token

userId = 1032

questionId, userId => 
*/

// 10 * 10000 => 10^5

// questionId need to be in sync with the Mysql question_sessions mapping.

let x = {
    "_id": {
        "$oid": "6570674d54edc2a20e7ae9cb"
    },
    "questionId": "13",
    "title": "Merge Strings Alternately",
    "titleSlug": "merge-strings-alternately",
    "difficulty": "Easy",
    "content": "html",
    "similarQuestionList": [
        {
            "title": "Zigzag Iterator",
            "difficulty": "Medium",
            "titleSlug": "zigzag-iterator"
        },
        {
            "title": "Minimum Additions to Make Valid String",
            "difficulty": "Medium",
            "titleSlug": "minimum-additions-to-make-valid-string"
        }
    ],
    "codeSnippets": [
        {
            "lang": "C++",
            "code": "class Solution {\npublic:\n    string mergeAlternately(string word1, string word2) {\n        \n    }\n};"
        },
        {
            "lang": "Java",
            "code": "class Solution {\n    public String mergeAlternately(String word1, String word2) {\n        \n    }\n}"
        },
        {
            "lang": "JavaScript",
            "code": "/**\n * @param {string} word1\n * @param {string} word2\n * @return {string}\n */\nvar mergeAlternately = function(word1, word2) {\n    \n};"
        }
    ],
    "topicTags": [
        {
            "name": "Two Pointers",
            "slug": "two-pointers"
        },
        {
            "name": "String",
            "slug": "string"
        }
    ]
}

