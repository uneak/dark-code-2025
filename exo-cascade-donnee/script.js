// getUser(id) → retourne { id, name, companyId }
// getCompany(companyId) → retourne { id, name, departmentId }
// getDepartment(departmentId) → retourne { id, name, employeeCount }

// {
//   user: { id: 1, name: "Alice", companyId: 10 },
//   company: { id: 10, name: "TechCorp", departmentId: 5 },
//   department: { id: 5, name: "Engineering", employeeCount: 50 }
// }

const getUser = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id, name: "Alice", companyId: 10 });
        }, 1000);
    });
};

const getCompany = async (companyId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: companyId, name: "TechCorp", departmentId: 5 });
        }, 1000);
    });
};

const getDepartment = async (departmentId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: departmentId, name: "Engineering", employeeCount: 50 });
        }, 1000);
    });
};

const getFullUserInfo = async (userId) => {
    return new Promise(async (resolve, reject) => {
        const user = await getUser(userId);
        const company = await getCompany(user.companyId);
        const department = await getDepartment(company.departmentId);
        resolve({ user, company, department });
    });
};


(async () => {
    const data = await getFullUserInfo(1);
    console.log(data);
})();;

