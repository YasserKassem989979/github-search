pipeline {
    agent any

    stages {
        stage('Clean UP') {
            steps {
                deleteDir()
            }
        }
        stage('Build') {
            steps{
                sh 'npm install && npm run build'
            }
        }
        stage('Test') {
            steps{
                sh 'npm run test'
            }
        }
    }
}