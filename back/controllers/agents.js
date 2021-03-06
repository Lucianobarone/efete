const Agent = require("../models/agents");
const User = require("../models/users");

const editProfileAgent = (req, res) => {
  let id = req.body._id;
  Agent.updateOne({ _id: id }, req.body, { new: true })
    .then(() => {
      return Agent.findById(id);
    })
    .then((agentProfile) => {
      res.status(200).send(agentProfile);
    });
};

const editDailyAmount = (req, res) => {
  let id = req.body._id;
  Agent.findByIdAndUpdate(id, req.body, { new: true }).then((agentProfile) => {
    res.status(200).json(agentProfile);
  });
};

const changeDailyAmount = (req, res) => {
  let id = req.body.id;
  Agent.findOne({ _id: id }).then((agent) => {
    agent
      .updateOne({
        dailyAmount: agent.dailyAmount - req.body.amount,
      })
      .then(() => {
        res.sendStatus(200);
      });
  });
};
const createAgent = (req, res) => {
  Agent.create(req.body)
    .then((agent) => {
      const agentCreated = agent;
      User.findOne({ _id: req.body.user }).then((user) => {
        user
          .updateOne({ role: "agent" })
          .then(() => {
            return User.findOne({ _id: req.body.user });
          })
          .then((userUpdated) => {
            res.status(201).json({ userUpdated, agentCreated });
          });
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const getAllUsers = (req, res) => {
  Agent.find({ isEliminated: false }).then((agents) => {
    res.json(agents);
  });
};
const getAgent = (req, res) => {
  let id = req.params.id;
  Agent.findOne({ _id: id, isEliminated: false }).then((agent) => {
    res.status(200).json(agent);
  });
};

const findAllAgentsUser = (req, res) => {
  Agent.find({ user: req.params.id, isEliminated: false })
    .populate("user")
    .then((agents) => {
      res.send(agents);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deleteAgent = (req, res) => {
  Agent.updateOne({ _id: req.params.id }, { isEliminated: true }).then(() => {
    Agent.find({ user: req.params.userId, isEliminated: false })
      .populate("user")
      .then((agents) => {
        res.send(agents);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  });
};

module.exports = {
  editProfileAgent,
  editDailyAmount,
  changeDailyAmount,
  createAgent,
  getAllUsers,
  getAgent,
  findAllAgentsUser,
  deleteAgent,
};
