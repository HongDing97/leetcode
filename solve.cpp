#include "iostream"
#include "queue"
#include "unordered_map"
using namespace std;

class Solution {
private:
    class mycomparison {
    public:
        bool operator()(const pair<int, int> &lhs, const pair<int, int> &rhs) {
            return lhs.second > rhs.second;
        }
    };

public:
    vector<int> topKFrequent(vector<int> &nums, int k) {
        priority_queue<pair<int, int>, vector<pair<int, int>>, mycomparison> q;
        unordered_map<int, int> m;
        for (auto n : nums)
            m[n]++;
        for (auto i : m) {
            q.push(i);
            if(q.size() > k)
                q.pop();
        }
        vector<int> res;
        while (!q.empty()) {
            res.push_back(q.top().first);
            q.pop();
        }
        return res;
    }
};

int main() {
    return 0;
}